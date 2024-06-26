import { Separator } from "@/components/ui/separator";
import { ImageDropzone } from "../../_components/image-dropzone";

export default function ImagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile and Cover image</h3>
        <p className="text-sm text-muted-foreground">
          Update your Profile and Cover image. Help others to meet you.
        </p>
      </div>
      <Separator />
      <ImageDropzone />
    </div>
  );
}
