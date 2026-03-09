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

