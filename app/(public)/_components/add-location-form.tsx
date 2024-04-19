"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { AddLocationFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

import { format } from "date-fns";
import { countryOptions } from "@/helpers/countries";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { location } from "@/actions/location";

import { toast } from "sonner";
import { useUploadFile } from "@/hooks/use-upload-file";
import { FileUploader } from "@/components/file-uploader";
import { UploadedFilesCard } from "./uploaded-files-card";
import { BeatLoader } from "react-spinners";

const fileValidation = z.object({
  files: z.array(z.instanceof(File)),
});

export const Schema = AddLocationFormSchema.merge(fileValidation);

type Inputs = z.infer<typeof Schema>;

const checkboxFeatures = [
  { id: "parking", label: "Parking" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "outdoorseating", label: "Outdoor seating" },
  { id: "fitnessarea", label: "Fitness area" },
  { id: "childcareservice", label: "Childcare service" },
  { id: "bicyclerental", label: "Bicycle Rental" },
  { id: "conciergeservice", label: "Concierge service" },
  { id: "loungearea", label: "Loungue area" },
] as const;

const checkboxIdealFor = [
  { id: "naturelovers", label: "Nature lovers" },
  { id: "adventure", label: "Advenutre" },
  { id: "hiking", label: "Hiking" },
  { id: "natureretreat", label: "Nature retreat" },
  { id: "sports", label: "Sports" },
  { id: "activity", label: "Activity" },
  { id: "colddays", label: "Cold days" },
  { id: "warmdays", label: "Warm days" },
  { id: "historicaltours", label: "Historical Tours" },
  { id: "camping", label: "Camping" },
  { id: "photography", label: "Photography" },
  { id: "nighttours", label: "Night Tours" },
] as const;

const categoryData = [
  { value: "Historical Sites", label: "Historical Sites" },
  { value: "Urban Area", label: "Urban Areas" },
  { value: "Parks", label: "Parks" },
  { value: "Museums", label: "Museums" },
  { value: "Lakes", label: "Lakes" },
  { value: "Caves", label: "Caves" },
  { value: "Mountains", label: "Mountains" },
  { value: "Rivers", label: "Rivers" },
  { value: "Waterfalls", label: "Waterfalls" },
  { value: "Beaches", label: "Beaches" },
  { value: "Other", label: "Other" },
] as const;

const steps = [
  {
    id: "Step 1",
    name: "Basic Information",
    fields: ["name", "country", "city", "category", "description"],
  },
  {
    id: "Step 2",
    name: "Additional Information",
    fields: [
      "dateArrived",
      "address",
      "openingTime",
      "closingTime",
      "price",
      "specialFeatures",
      "idealFor",
    ],
  },
  {
    id: "Step 3",
    name: "Media Content",
    fields: ["files", "video"],
  },
  {
    id: "Step 4",
    name: "Complete Form",
  },
];

type Cities = string[] | undefined;

export default function AddLocationForm() {
  const [previousStepIndex, setPreviousStepIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [cities, setCities] = useState<Cities>([]);
  const [initialRender, setInitialRender] = useState<boolean>(true);
  const difference = currentStepIndex - previousStepIndex;
  const [isPending, setTransition] = useTransition();
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    uploadFiles,
    progresses,
    uploadedFiles,
    uploadedFilesUrl,
    isUploading,
  } = useUploadFile("imageUploader", { defaultUploadedFiles: [] });

  const form = useForm<Inputs>({
    resolver: zodResolver(Schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      dateArrived: new Date(),
      address: "",
      openingTime: undefined,
      closingTime: undefined,
      price: undefined,
      specialFeatures: [],
      idealFor: [],
      images: [],
      files: [],
    },
  });
  const submitFormHandler = async (values: z.infer<typeof Schema>) => {
    setIsLoading(true);

    setTransition(() => {
      location(values)
        .then((data) => {
          if (data && data.error) {
            toast.error("Something went wrong!");
          }
          if (data && data.success) {
            form.reset();
            setSuccess(true);
          }
        })
        .catch(() => {
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStepIndex].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    console.log(fields);
    if (!output) return;

    if (currentStepIndex < steps.length - 1) {
      if (currentStepIndex === steps.length - 2) {
        await form.handleSubmit(submitFormHandler)();
      }
      setPreviousStepIndex(currentStepIndex);
      setCurrentStepIndex((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStepIndex > 0) {
      setPreviousStepIndex(currentStepIndex);
      setCurrentStepIndex((step) => step - 1);
    }
  };

  let country = form.watch("country");

  const handleCountryChange = useCallback(async () => {
    const selectedCountry = form.getValues("country");
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country: selectedCountry }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }

      const data = await response.json();

      const cities = data.data;

      setCities(cities);

      return cities;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }, [country]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    handleCountryChange();
  }, [handleCountryChange]);

  useEffect(() => {
    console.log("test", uploadedFilesUrl);

    form.setValue("images", uploadedFilesUrl);
  }, [uploadedFilesUrl]);

  return (
    <section className="flex w-full max-w-[1000px] flex-col  p-8 font-poppins sm:p-12 md:p-24">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStepIndex > index ? (
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStepIndex === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <Form {...form}>
        <form
          className="mt-12 py-12"
          onSubmit={form.handleSubmit(submitFormHandler)}
        >
          {currentStepIndex === 0 && (
            <motion.div
              initial={{ x: difference >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide essential details about the location, such as its name,
                country, city, category, and a brief story about location.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Name of location" />
                        </FormControl>
                        <FormDescription>
                          Enter the name or title of the location. This should
                          be a concise and descriptive name that accurately
                          represents the location
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-2 sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Country</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild className="bg-transparent">
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "w-full justify-between",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value
                                  ? countryOptions.find(
                                      (country) =>
                                        country.value === field.value,
                                    )?.label
                                  : "Select country"}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search country..." />
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup className="max-h-[200px] overflow-y-auto">
                                {countryOptions.map((country) => (
                                  <CommandItem
                                    value={country.label}
                                    key={country.value}
                                    onSelect={() => {
                                      form.setValue("country", country.value);
                                    }}
                                  >
                                    <CheckIcon
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        country.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    {country.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Select the country where the location is situated.
                          This helps categorize and organize locations based on
                          their geographic region.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>City/Town</FormLabel>
                        <Popover>
                          <PopoverTrigger
                            asChild
                            className="bg-transparent"
                            disabled={true}
                          >
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "w-full justify-between",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value
                                  ? cities?.find(
                                      (cities) => cities === field.value,
                                    )
                                  : "Select city"}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search city..." />
                              <CommandEmpty>No city found.</CommandEmpty>
                              <CommandGroup className="max-h-[200px] overflow-y-auto">
                                {cities?.map((country, index) => (
                                  <CommandItem
                                    value={country}
                                    key={index}
                                    onSelect={() => {
                                      form.setValue("city", country);
                                    }}
                                  >
                                    <CheckIcon
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        country === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    {country}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Select the city or town where the location is located.
                          This helps users identify the specific area of the
                          location within the country.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[210px]">
                            {categoryData.map((category) => (
                              <SelectItem
                                key={category.value}
                                value={category.value}
                              >
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the category that best describes the type of
                          location. This helps users understand the nature or
                          purpose of the place.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-10">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about that place..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a captivating narrative about the location.
                        Describe its unique features, historical significance,
                        and any interesting anecdotes that can engage potential
                        visitors
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </motion.div>
          )}

          {currentStepIndex === 1 && (
            <motion.div
              initial={{ x: difference >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Additional Information and Features
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                After entering basic location information, it's time to provide
                additional details and features to enrich your content.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="max-w-[392px] sm:col-span-3 sm:col-start-1">
                  <FormField
                    control={form.control}
                    name="dateArrived"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="py-1.5">Arrived Date </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild className="bg-transparent">
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("2023-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Arrived Date represents the date of your visit to the
                          location. Please enter the date when you visited the
                          place.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="max-w-[392px] sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter Address" />
                        </FormControl>
                        <FormDescription>
                          The Address field allows you to specify the location's
                          physical address. Please provide the complete address,
                          including street name and number to accurately mark
                          the location on the map.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
                <div className="col-span-1 flex flex-col">
                  <div className="flex flex-row">
                    <FormField
                      control={form.control}
                      name="openingTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Working Time{" "}
                            <span className="hidden font-light text-muted-foreground sm:inline-block">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Opening time"
                              type="number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <span className="mx-2 mt-12 flex h-0.5 w-3 items-center justify-center bg-gray-900 dark:bg-primary"></span>
                    <FormField
                      control={form.control}
                      name="closingTime"
                      render={({ field }) => (
                        <FormItem className="mt-8">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Closing time"
                              type="number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormDescription className="pt-1.5">
                    Specify the hours during which the location is open.
                  </FormDescription>
                </div>

                <div className="col-span-1 max-w-[392px]">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Price{" "}
                          <span className="font-light text-muted-foreground">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Add price"
                            type="number"
                          />
                        </FormControl>
                        <FormDescription>
                          Indicate the price for admission or entry if
                          applicable
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1  gap-y-8">
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="specialFeatures"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>
                            Special Features{" "}
                            <span className="font-light text-muted-foreground">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormDescription>
                            Special features typically refers to unique or
                            distinctive attributes for some location.
                          </FormDescription>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4">
                          {checkboxFeatures.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="specialFeatures"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className={cn(
                                      "flex flex-row items-center gap-2 space-y-0 rounded-xl border px-4 py-1.5 hover:cursor-pointer",
                                      {
                                        "bg-primary text-white":
                                          field.value?.includes(item.id),
                                      },
                                    )}
                                  >
                                    <FormControl>
                                      <Checkbox
                                        className={cn(
                                          "hidden border-0 hover:cursor-pointer data-[state=checked]:bg-transparent",
                                          {
                                            block: field.value?.includes(
                                              item.id,
                                            ),
                                          },
                                        )}
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          if (!Array.isArray(field.value)) {
                                            field.onChange([item.id]);
                                          } else {
                                            const updatedValue = checked
                                              ? [...field.value, item.id]
                                              : field.value.filter(
                                                  (value) => value !== item.id,
                                                );

                                            field.onChange(updatedValue);
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-xs hover:cursor-pointer">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="idealFor"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Ideal for</FormLabel>
                          <FormDescription>
                            Ideal for is typically used to indicate the best
                            activity suitable for some location.
                          </FormDescription>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4">
                          {checkboxIdealFor.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="idealFor"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className={cn(
                                      "flex flex-row items-center gap-2 space-y-0 rounded-xl border px-4 py-1.5 hover:cursor-pointer",
                                      {
                                        "bg-primary text-white":
                                          field.value?.includes(item.id),
                                      },
                                    )}
                                  >
                                    <FormControl>
                                      <Checkbox
                                        className={cn(
                                          "hidden border-0 hover:cursor-pointer data-[state=checked]:bg-transparent",
                                          {
                                            block: field.value?.includes(
                                              item.id,
                                            ),
                                          },
                                        )}
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id,
                                                ),
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-xs hover:cursor-pointer">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStepIndex === 2 && (
            <motion.div
              initial={{ x: difference >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Media and Additional Content
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Add media and additional content to help others.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <div className="space-y-6">
                        <FormItem className="w-full">
                          <FormLabel>Images</FormLabel>
                          <FormControl>
                            <FileUploader
                              value={field.value}
                              onValueChange={field.onChange}
                              maxFiles={8}
                              maxSize={4 * 1024 * 1024}
                              progresses={progresses}
                              onUpload={uploadFiles}
                              disabled={isUploading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        {uploadedFiles.length > 0 ? (
                          <UploadedFilesCard uploadedFiles={uploadedFiles} />
                        ) : null}
                      </div>
                    )}
                  />
                </div>

                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="video"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Video{" "}
                          <span className="font-light text-muted-foreground">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Add Url of video" />
                        </FormControl>
                        <FormDescription>
                          Add the URL of a video showcasing the location from
                          Youtube or some other platform.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}
          {currentStepIndex === 3 && (
            <motion.div
              initial={{ x: difference >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {isLoading ? (
                <>
                  <h1 className="inline-block text-3xl font-semibold tracking-wide  text-gray-900">
                    Processing...
                  </h1>
                  <div className="mt-4 flex w-full items-center justify-center">
                    <BeatLoader />
                  </div>
                </>
              ) : isSuccess ? (
                <>
                  <h1 className="inline-block text-3xl font-semibold tracking-wide  text-gray-900">
                    Form Completed
                  </h1>

                  <div className="mt-4 text-muted-foreground">
                    Congratulations! You've successfully completed all the steps
                    of the form. Your submission is now pending review by our
                    team. While we carefully evaluate your submission, you can
                    track the status of your form in your profile under{" "}
                    <span className="inline font-semibold text-black">
                      My Profile &#x203A; Status
                    </span>{" "}
                    Thank you for providing us with the necessary information.
                    We'll notify you once the review process is complete.
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <h1 className="inline-block text-3xl font-semibold tracking-wide  text-gray-900">
                    Form Submission Failed
                  </h1>{" "}
                  <div className="mt-4 text-muted-foreground">
                    We're sorry, but there was an issue with submitting your
                    form. Please review the information you provided and try
                    again. If the problem persists, feel free to contact our
                    support team for assistance.
                  </div>
                </>
              )}
            </motion.div>
          )}
        </form>
      </Form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={
              currentStepIndex === 0 ||
              isUploading ||
              isPending ||
              currentStepIndex === 3
            }
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={
              currentStepIndex === steps.length - 1 || isUploading || isPending
            }
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
