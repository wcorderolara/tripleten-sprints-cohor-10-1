# CSS GRID LAYOUT
Is a two-dimensional layout system, that allows you to arrange elements
in both rows and columns at the same time. Unlike Flexbox or Flex which
works in one dimesion at time.

You can define Rows and Columns, you can place your content into the cells
created by this grid

## Key Advantages
- Precise Layout Control: Control exact positioning of items
- Responsive Design: Easy to crate layouts that adapt to screen size
- Less HTML Nesting: Cleaner, simpler markup
- Alignment Power: Easy horizontal and vertical centering
- Code Efficiency: Accomplish more with less CSS.

## CSS GRID TERMINOLOGY

#### Grid Container
The parent element that has display:grid applied to it. All direct Children become grid items.

#### Grid Item
Any direct child of a grid container. These elements are placed within the grid cells

#### Grid Lines
The dividing lines that make up the structure of the grid. These can be horizontal (row lines)
or vertical (column lines), they are numbred starting from 1.

In a 3-column grid, you have 4 vertical grid lines

#### Grid Cells
The space between two adjacent row lines and two adjacent column lines. One cell is the smallest
unit of the grid

#### Grid Track
The space between two grid lines. This can be either a row or a column.

#### Grid Area
A rectangular space on the grid composed of one or more grid cells. An area can span multiple
rows and/or columns

## Grid Container: Rows and Columns

grid-template-columns && grid-template-rows

#### grid-template-columns
This property defines the structure of columns in your grid. You can specify the width of each column,
separated by spaces

#### grid-template-rows
Similar to columns, but defines the height of rows. If you don't specify row heights, they'll automatically size based on content

## GAP PROPERTY
The gap creates space between grid items. This is useful and makes your layouts look polished and professional without adding extra elements.

## THE REPEAT FUNCTION
The repeat() function eliminates the manual definition for rows and columns, this allows create a code
more clean and maintainable.

repeat(number_of_columns/rows, width/height)


#### Auto-Fit and Auto-Fill
auto-fit: Automatically fits as many columns as possible in the available space, then collapses empty tracks.

auto-fill: Automatically fills the available space with as many columns as possible, but keeps empty tracks

## FR - Fraction Unit
The fr unit is unique to CSS Grid. It's one of the most powerful features of Grid, and, allows you to 
distribute available space proportionally of the parent or master.

fr Represents a fraction of the available space in the grid container.

- 1fr = 1 FRACTIONS OF THE AVAILABLE SPACE
- 2fr = 2 FRACTIONS OF THE AVAILABLE SPACE
- 3fr = 3 FRACTIONS OF THE AVAILABLE SPACE


## POSITIONING
#### grid-column
grid-column specifies which column lines an item spans. Use the shorthan start_line/end_line

grid-column: 1/3

#### grid-rows
similar to grid-column but for rows

grid-row: start_line/end_line

## Grid Areas
Are a powerful way to create layouts. Instead of positioning items by line numbers, you can name areas  and place items into them. This makes complex layouts easy to understand and modify.


#### Defining Grid Areas
*grid-template-areas* to define named areas in our grid. This property takes a string that visualizes your layout

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}
```

#### Assigning items to Areas
Once areas are defined, assign items using the *grid-area* property

```css
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.aside {
    grid-area: aside;
}

.footer {
    grid-area: footer
}
```