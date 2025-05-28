"use client";
import { HiOutlineUpload } from "react-icons/hi";
import { FileRow } from "@/types/general";
import { Button } from "../Button/Button";
import { FileTable } from "../FileTable/FileTable";

interface FilesSectionProps {
  files: FileRow[];
}

export default function FilesSection({ files }: FilesSectionProps) {
  const UploadIcon = HiOutlineUpload as any;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-sm md:text-lg font-bold text-black">Files uploaded</h2>
        <div className="flex space-x-2">
          <Button label='Download all' variant="secondary" size='sm' />
          <Button label='Upload' variant="purple" icon={<UploadIcon className='text-white' />} size='sm' />
        </div>
      </div>
      <FileTable files={files} />
    </div>
  );
}
