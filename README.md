# Native Web Component Library

**Warning: Under construction!**

This is a collection of simple UI components created using native web components.

## Concepts

### Global Styles

When imported, this library looks for a `<style>` component in the document head with the attribute `data-global-styles`. If not found, some default global styles are added to the document head. You can override these styles or prevent them from being loaded by adding your own `<style>` component to the document head with the `data-global-styles` attribute.

The following variables are set with the default global styles:

```css
:root {
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-xxl: 22px;

  --size-xs: 4px;
  --size-sm: 8px;
  --size-md: 16px;
  --size-lg: 32px;
  --size-xl: 64px;
  --size-xxl: 128px;

  --border-radius: 4px;
  --padding-size: var(--size-md);
}
```

### Bleed

`bleed` attributes can be used to add a negative margin to elements that matches their current padding (if using `padding-size`, see below for details).

- `bleed` - sets the margin on all sides
- `bleed-bottom` - sets the bottom margin
- `bleed-left` - sets the left margin
- `bleed-right` - sets the right margin
- `bleed-top` - sets the top margin
- `bleed-sides` - sets the left and right margins

### Font Size

The font size can be set on any element using the `font-size` attribute. Valid values are:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `xxl`

### Padding

Padding can be set on any element using the `padding-size` attribute. Valid values are:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `xxl`

## Components

These components have some basic styles set using the CSS variables listed above.

### UiBand

#### Attributes

**background-color**

Sets the background color.

**size**

Sets the amount of space surrounding the component. Valid values are:

- `xs`
- `sm`
- `md` (default)
- `lg`
- `xl`
- `xxl`

#### Usage

```html
<ui-band>
  Content here
</ui-band>
```

### UiButton

#### Attributes

**type**

Sets the button type. Valid types include:

- `destructive`
- `minor`
- `primary`
- `success`
- `warning`

#### Usage

```html
<ui-button>Click me</ui-button>
```

**As a link**

The `href` attribute can be used to create a link styled like a button:

```html
<ui-button href="https://example.com">Example.com</ui-button>
```

### UiCard

#### Usage

```html
<ui-card>
  Content here
</ui-card>
```

### UiDialog

#### Usage

```html
<ui-dialog>
  <div slot="header">Header content</div>
  <div slot="content">Dialog body</div>
  <div slot="footer">Footer content</div>
</ui-dialog>
```

### UiGrid

#### Usage

```html
<ui-grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ui-grid>
```

### UiRow

#### Usage

```html
<ui-row>
  <input placeholder="Email address" type="email">
  <input type="submit" value="Save">
</ui-row>
```

### UiSeparator

#### Usage

```html
<ui-separator></ui-separator>
```

## Creating Components

TODO
