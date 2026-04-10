#                                                                       

1. `pointer` =>Ye CSS property hai, Ye decide karti hai: element event receive kare ya nahi
   `pointer-events`: none => “Main click / scroll / hover kuch bhi receive nahi karunga”, “Event mere niche wale element ko chala jaayega”
   `pointer-events`: auto => Default behavior: “Main event receive karunga”

👉 pointer-events ka kaam hai:
Event ko rokna
ya pass karna

2. insert =>
   `inset: 0` => element ko har side se 0 distance pe chipka do, top: 0;right: 0; bottom: 0; left: 0;

🎯 Matlab kya hua?
👉 Agar element position: absolute ya fixed hai:
👉 to wo:
    apne parent ko poora cover kar lega (full width + full height)

👉 iska matlab:

top: 0 → upar se chipak gaya
left: 0 → left se chipak gaya
right: 0 → right tak stretch
bottom: 0 → niche tak stretch

⚡ Kab use karte hain?
     👉 Jab tu chahta hai:
           Full screen background (map, image)
           Overlay (modal, loader)
           Blur layer
           Click capture layer



