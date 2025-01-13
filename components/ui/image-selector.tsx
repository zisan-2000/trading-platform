"use client";

import { cn } from "@/lib/utils";
import { IdCard, Upload, XCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";

const ImagePreview = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => (
  <div className="relative w-full min-h-[250px] rounded-lg">
    <button
      className="absolute top-0 z-10 right-0 translate-x-1/2 -translate-y-1/2"
      onClick={onRemove}
    >
      <XCircleIcon className="size-5 fill-primary text-primary-foreground" />
    </button>
    <Image src={url} fill alt="image" className="size-full object-cover" />
  </div>
);

export default function ImageSelector({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="mt-1 w-full">
        {profilePicture ? (
          <ImagePreview
            url={profilePicture}
            onRemove={() => setProfilePicture(null)}
          />
        ) : (
          <Dropzone
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setProfilePicture(imageUrl);
              }
            }}
            accept={{
              "image/png": [".png", ".jpg", ".jpeg", ".webp"],
            }}
            maxFiles={1}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject,
            }) => (
              <div
                {...getRootProps()}
                className={cn(
                  "border border-dashed min-h-[250px] bg-white flex items-center border-slate-400 justify-center rounded-lg focus:outline-none focus:border-primary",
                  {
                    "border-primary bg-slate-100": isDragActive && isDragAccept,
                    "border-destructive bg-destructive/20":
                      isDragActive && isDragReject,
                  }
                )}
              >
                <input {...getInputProps()} id="image" />
                <div className="flex flex-col p-4 aspect-video justify-center items-center">
                  <IdCard className="size-12 stroke-1 text-slate-500" />
                  <label
                    htmlFor="image"
                    className="font-medium text-slate-700 text-lg"
                  >
                    {title}
                  </label>
                  <p className="text-sm text-muted-foreground">{description}</p>

                  <p className="mt-4 p-3 text-slate-600 gap-2 flex justify-center items-center">
                    <Upload className="size-5 text-slate-500" />
                    <span>Drag & drop here or select a file</span>
                  </p>
                </div>
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
}
