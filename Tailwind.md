# Tailwind concepts
1. `h-screen` =>Jab tumhe poori screen ki height chahiye hoti hai Centering content vertically (login page, hero section) h-screen = 100vh (viewport height)
2. `h-full` =>Jab tumhe parent ki full height leni ho. Parent ke paas defined height honi chahiye. Warna h-full kaam nahi karega ❌
3. `w-screen` => same logic on width also
4. `w-full` => same logic on width also

# Flex
1. `flex` =>Flex ek layout system hai jo items ko row ya column me arrange karta hai. items ek line me aa jaate hai (default: row)
2. `flex-row` → left to right {`default`}
3. `flex-col` → top to bottom

4. `Justify` =>Ye main axis (direction) pe kaam karta hai {horizontal line}

| Class           | Meaning        |
| --------------- | -------------- |
| justify-start   | start me       |
| justify-center  | center me      |
| justify-end     | end me         |
| justify-between | equal gap      |
| justify-around  | around spacing |

5. `align` (cross axis) => Ye cross axis pe kaam karta hai{vertical line}

| Class        | Meaning |
| ------------ | ------- |
| items-start  | top     |
| items-center | center  |
| items-end    | bottom  |

6. `gap` =>spacing between items gap-4
7. `flex-wrap` => Jab items overflow kare → next line me chale jaate hai

# Text
1. `text-center`=> Text apni line me hi rahega. bas center align ho jayega
2. `text-lg` => 
3. `text-base`=> 

# Font medium
1. font-bold =>
2. font-medium => 

# inline {span tag}
1. `block` => full block  
2. `inline` => block ko inline banana

# Background Image
1. bg-[url('/image.jpg')] → image lagayi
Properties
a. bg-cover=> Image stretch ho kar pura container fill karegi
b. bg-contain=> Image pura dikhega (fit hoga, but empty space aa sakta hai)
c. bg-center=> Image center align
d. bg-no-repeat=> Image repeat nahi hogi
e. bg-bottom=> 

# Placeholder
1. `placeholder:text-base`

# Line Height
1. `leading-tight`=> 

# Position
Jab tu position: fixed lagata hai: 👉 Element normal document flow se bahar nikal jata hai
Q. Normal flow kya hota hai?
Normally sab elements ek ke niche ek lagte hain, Har element apni space occupy karta hai

👉 Parent pe relative + child pe absolute
✔ Child flow se bahar aa jata hai
✔ Parent flow me hi rehta hai
✔ parent ke respect me move karta hai {`child`}

Fixed lagate hi:
❌ wo apni original space leave kar deta hai
❌ browser uske liye jagah reserve nahi karta
👉 isliye dusre elements uski jagah le lete hain


1. position: `relative` => Apni normal position pe rehta hai , Reference banata hai for absolute children
2. position: `absolute` => Normal flow se bahar ho jata hai , Space occupy nahi karta , Nearest relative parent ke according move karta hai
3. Golden Rule
👉 absolute child hamesha
➡️ nearest relative parent ke respect me position hota hai
5. Use Case
   a. Element ko upar chipkana => absolute
   b. Usko control karna => parent me relative


# Opacity 
1. opacity-1 => element visible 
2. opacity-0 => element hide

# Translate
ans. Translate = kisi element ko hilana (move karna)
1. translate-x → left/right move {translate-x-10} right me shift ho jayega  {-translate-x-10} opposite direction me move
2. translate-y → upar/neeche move

🔹 Sabse important baat ⚡
    👉 Ye original jagah nahi badalta => jagah same rehti hai
    👉 Sirf dikhne me move hota hai => bas element slide ho jata hai

# Border
1. `border` => Default border 1px border,gray color
2. `border-2` => Border thickness (size)
3. `border-2` border-red-500 => border color
4. `border-t-2` => Specific side border
5. `border rounded-lg` => Rounded border
   

