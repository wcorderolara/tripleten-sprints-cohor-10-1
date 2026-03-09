## THE PROBLEM
We had separate websites:
- Desktops and Laptops
- Mobile Devices (iPhone)
- Medium Mobile Devices (iPad)
- Smart TVs (Very Very Very Large screens)
- Smart watches (very very very small screens)

2010 Ethan Marcotte, Responsive Web Design Pattern
build a single website that automatically responds and adpats its layout to fit any screen ti's viewed on.

## WHAT IS Responsive Web Design?
Responsive Web Design (RWD) is an approach to web development that makes web pages render well on a variety of devices and scren sizes. Instead of creating separate websites for desktops, laptos, tables and mobiles.

- Desktop Computers (1920px x 3840px wide)
- Tablets (768px to 1024px wide)
- Smathphones (320px to 480px wide)
- Laptops (1366px to 1440px wide)
- Smat Tvs and other devices

## 3 Pillars of RWD
- *Fluid Layouts* - Using relative unit (percentages, fr, em, rem) instead of fixed pixels.
- *Flexible Media* - Images and videos that scale with the Layout
- *Media Queries* - CSS RULES that apply differente styles based on device characteristics.

## Relative Block Dimensions
#### Fixed Units (Pixels - px)

```css
.box {
    width: 300px;
    height: 200px;
}


.text {
    font-size: 16px;
    color: white;
    font-weight: bold
}
```

#### Relative Units (Percentages - %) (Text Content - em && rem) 1rem == default font size (16px)
```css
.box {
    height: 200px;
    width: 75%;
}
```

## The Ins and Out of Using Images (Bitmap vs SVG)
JPEG, PNG, GIF, WebP

#### Advantages
- Perfect for Photographs and complex images with many colors
- Smaller file sizes for photographs (JPEG)
- Support transparency (PNG)

#### Disadvantages
- When enlarge, they become pixelated and blurry
- File size encreases with dimensions
- Not scalable like SVGs


```css
img {
    max-width: 100%;
    height: auto;
}

```

```html
<img 
    src="image_url/image.jpg"
    alt="Description"
    srcset="image-2x.jpg 2x, image-4x.jpg 4x"
>
```

## MEDIA QUERIES
#### What are Media Queries?
MD are CSS rules that apply different styles based on device characteristics like screen width,
height, orientation (landscape and portrait) and more.

```css
@media(screen_size_to_respond) {
    /*
        CSS RULES
    */
}  
```
* max-width
* min-width

- 320px to 480px (Mobile Devices)
- 480px to 768px (Tablet or Medium Devices)
- 768px to 1024px (Large Devices - Laptops, Desktops)
- 1024+ (XL Devices)

#### Desktop First Approach (max-width)
- You start writing CSS for large screens first
- Then, you use media queries to adjust the layout for smaller screens.
- *Syntax* @media (max-width: 768px) {...} "Apply these styles only if the screen is 768px wide or less"
- The CSS rules must be created from top to bottom. that means the bigger size goes first and the smaller size goes at the end.

#### Mobile First Approach (min-width)
- You start writing CSS for small mobile screens.
- The, you use media queries to enhance the layout for larger screens.
- *Syntax* @media (min-width: 768px) {...} "Apply these styles only if the screen is 768px wide or more"
- The CSS rules must be create from bottom to top. That means the smaller size goes first and the bigger size goes at the end.
- *Modern Best Practice* Mobile-first is generally preferred as it's more future-proof and often results in better performance.
