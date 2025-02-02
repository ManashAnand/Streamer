

export default function Gallery() {
    const musicImages = [
        { alt: "Live Concert Scene", src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d" },
        { alt: "Guitar Close-up", src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad" },
        { alt: "Vinyl Record Player", src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76" },
        { alt: "Headphones & Music", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },
        { alt: "DJ Mixing Music", src: "https://images.unsplash.com/photo-1574169208507-84376144848b" },
        { alt: "Piano Keys", src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" }
    ];

    return (
        <div className=" mt-20">
            
        <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                <img alt={musicImages[0].alt} className="w-full object-cover h-full object-center block hover:scale-95 transition-all duration-150  " src={musicImages[0].src} />
          

                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt={musicImages[1].alt} className="w-full object-cover h-full object-center block hover:scale-95 transition-all duration-150 ease-in-out" src={musicImages[1].src} />
                </div>
                <div className="md:p-2 p-1 w-full">
                    <img alt={musicImages[2].alt} className="w-full h-full object-cover object-center block hover:scale-95 transition-all duration-150 ease-in-out" src={musicImages[2].src} />
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                    <img alt={musicImages[3].alt} className="w-full h-full object-cover object-center block hover:scale-95 transition-all duration-150 ease-in-out" src={musicImages[3].src} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt={musicImages[4].alt} className="w-full object-cover h-full object-center block hover:scale-95 transition-all duration-150 ease-in-out" src={musicImages[4].src} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt={musicImages[5].alt} className="w-full object-cover h-full object-center block hover:scale-95 transition-all duration-150 ease-in-out" src={musicImages[5].src} />
                </div>
            </div>
        </div>
        
        </div>
    );
}
