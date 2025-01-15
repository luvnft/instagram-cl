import PostsGrid from "@/components/PostsGrid";
import { Check, ChevronLeft, Settings } from "lucide-react";

export default function ProfilePage(){
    return(
        <main>
            <section className="flex justify-between items-center">
                <button>
                    <ChevronLeft/>
                </button>
                <button className="font-bold flex items-center gap-2">
                    my_name_is_angel
                    <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
                        <Check size={16}/>
                    </div>
                </button>
                <button>
                    <Settings/>
                </button>
            </section>
            <section className="mt-8 flex justify-center">
                <div className="size-48 p-2 rounded-full bg-gradient-to-tr">
                    <div className="size-44 p-2 bg-white rounded-full">
                        <div className="size-40 aspect-square overflow-hidden rounded-full ">
                            <img className="" src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center mt-4">
                <h1 className="text-xl font-bold">Johny</h1>
                <p className="text-gray-500 mt-1 mb-1">Business account</p>
                <p>
                    Entrepreneur, husband, father <br/>
                    contact: johny@gmail.com
                </p>
            </section>
            <section className="mt-4">
                <PostsGrid/>
            </section>
        </main>
    );
}