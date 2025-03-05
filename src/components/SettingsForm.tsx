'use client';
import { prisma } from "@/db";
import { CloudUpload } from "lucide-react";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { updateProfile } from "@/actions";
import { useRouter } from "next/navigation";
import { Profile } from "@prisma/client";

export default function SettingsForm({userEmail, profile}:{userEmail: string, profile: Profile}){
    const router = useRouter();
    return(
        <form action={async (data:FormData) => {
            await updateProfile(data, userEmail);
            router.push('/profile');
            router.refresh();
        }}>
            <div className="flex gap-2 items-center">
                <div>
                    <div className="bg-gray-400 size-24 rounded-full"></div>
                </div>
                <div>
                    <Button variant="soft">
                        <CloudUpload/>
                        change avatar
                    </Button>
                </div>
            </div>
            
            <p className="mt-2 font-bold">username</p>
            <TextField.Root name="username" defaultValue={profile.username || ''} placeholder="your_username"/>
            
            <p className="mt-2 font-bold">name</p>
            <TextField.Root name="name" defaultValue={profile.name || ''} placeholder="John Doe"/>
            
            <p className="mt-2 font-bold">subtitle</p>
            <TextField.Root name="subtitle" defaultValue={profile.subtitle || ''} placeholder="Graphic designer"/>
            
            <p className="mt-2 font-bold">bio</p>
            <TextArea name="bio" defaultValue={profile.bio || ''}/>
            
            <div className="mt-4 flex justify-end">
                <Button variant="solid">Save settings</Button>
            </div>
        </form>
    );
}