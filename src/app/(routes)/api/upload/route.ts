import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/config"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    // const info = await pinata.groups.public.create({name: 'ig-photos', isPublic: true})
    // console.log(info);
    const { cid } = await pinata.upload.public.file(file, {groupId: '7cad9121-0440-4b30-90d0-5eb36d97ac84'});
    const url = await pinata.gateways.public.convert(cid);
    return NextResponse.json(url, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );  
  }
}