"use client";

import { useState, useCallback, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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

import { countryOptions } from "@/helpers/countries";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { BsGlobeAmericas } from "react-icons/bs";
import CitySvg from "@/assets/svgs/city-svg";
import { IoSearch } from "react-icons/io5";

type Cities = string[] | undefined;

interface SearchParams {
  query?: string;
  country?: string;
  city?: string;
}

export const FilterBar = ({ query, country, city }: SearchParams) => {
  const [initialRender, setInitialRender] = useState<boolean>(true);
  const [isCountrySelected, setIsCountrySelected] = useState<boolean>(false);
  const [cities, setCities] = useState<Cities>([]);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      country: country || "",
      city: city || "",
      search: query || "",
    },
  });

  let countrySelected = form.watch("country");

  const handleCountryChange = useCallback(async () => {
    setIsCountrySelected(false);
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
      setIsCountrySelected(true);

      return cities;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }, [countrySelected]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    handleCountryChange();
  }, [handleCountryChange]);

  //filter logic

  const search = () => {
    const query = form.getValues("search");
    const country = form.getValues("country");
    const city = form.getValues("city");

    const queryParams: SearchParams = {};

    if (query) {
      queryParams.query = query;
    }

    if (country) {
      queryParams.country = country;
    }

    if (city) {
      queryParams.city = city;
    }

    const queryString = new URLSearchParams(
      queryParams as Record<string, string>,
    ).toString();

    startTransition(() => {
      router.push(`/explore/search?${queryString}`);
    });
  };

  return (
    <section className="flex  flex-col gap-4 gap-x-4 rounded-lg border border-input bg-background  p-4 font-poppins dark:border-0 dark:bg-[#12131F] lg:flex-row">
      <Form {...form}>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-[280px] lg:w-[200px]">
              <FormLabel>Country</FormLabel>
              <Popover>
                <PopoverTrigger
                  asChild
                  className="border-0 bg-transparent py-2 pr-2 shadow-none lg:py-6"
                  disabled={isSearching}
                >
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full  justify-between px-1",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      <BsGlobeAmericas className="mr-2 h-7 w-7 text-primary dark:text-white lg:h-10 lg:w-10" />
                      <span className="truncate lg:w-32">
                        {field.value
                          ? countryOptions.find(
                              (country) => country.value === field.value,
                            )?.label
                          : "Select country"}
                      </span>
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command className="dark:bg-[#12131F]">
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className="max-h-[200px] overflow-y-auto ">
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-[280px] lg:w-[200px]">
              <FormLabel>City/Town</FormLabel>
              <Popover>
                <PopoverTrigger
                  asChild
                  className="border-0 bg-transparent py-2 pr-2 shadow-none lg:py-6"
                  disabled={!isCountrySelected || isSearching}
                >
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between px-1",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      <CitySvg className="h-7 w-7 fill-current pb-0.5 text-primary dark:text-white lg:h-10 lg:w-10" />
                      <span className="truncate lg:w-[120px]">
                        {field.value
                          ? cities?.find((cities) => cities === field.value)
                          : "Select city"}
                      </span>
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command className="dark:bg-[#12131F]">
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-[280px] lg:w-[220px] xl:w-[320px]">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isSearching}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      search();
                    }
                  }}
                  placeholder="Name of location"
                  className="rounded-[3px] border-0 border-b-2 py-2 shadow-none focus:border-b-primary focus-visible:ring-0 lg:py-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          onClick={form.handleSubmit(search)}
          disabled={isSearching}
          className="text-md mt-[25px] py-2 tracking-widest lg:py-6"
        >
          <IoSearch className="mr-2 h-5 w-5 lg:h-7 lg:w-7" />
          Search
        </Button>
      </Form>
    </section>
  );
};
