# Modern Components

Experience the evolution in web development with our React component library designed to deliver a unique and modern user interface development experience. With a focus on customization and seamless integration, our library offers a wide variety of components to elevate the aesthetics and functionality of your applications.

Key Features:

- Customizable Components: Each component has been meticulously designed to offer a high degree of customization. From backgrounds to text effects, you can tailor each element to perfectly fit your creative vision.

- Scroll-based Animations: Add dynamism to your applications with animations that respond to user scrolling. Create immersive and captivating experiences with smooth transitions and visually appealing effects.

- Attractive Backgrounds: Transform the look of your components and pages with eye-catching backgrounds. From subtle gradients to intricate patterns, our library provides a wide range of options to customize the aesthetics of your projects.

- Compatibility with Tailwind and Vanilla CSS: We adapt to your workflow. Whether you prefer the concise structure of Tailwind CSS or the flexibility of Vanilla CSS, our library effortlessly integrates into both environments, providing a seamless development experience.

## Usage/Examples

```javascript
<TextReveal
  bgTextColor='hsla(0, 0%, 100%, 0.5)'
  textColor='#000'
  className='font-bold text-2xl'>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum iste,
  atque ab, ipsam tempore vero molestiae quasi tenetur velit fuga ad incidunt,
  eaque exercitationem aut? Ipsum esse consectetur natus!
</TextReveal>
```

| Prop           | Description                                  | Type    |
| -------------- | -------------------------------------------- | ------- |
| children       | The content to be revealed.                  | String  |
| textColor      | The color of the text.                       | Colors  |
| bgTextColor    | The color of the background text.            | Colors  |
| gradient       | Whether to use a gradient background.        | Boolean |
| gradientColor1 | The first color of the gradient background.  | Colors  |
| gradientColor2 | The second color of the gradient background. | Colors  |

```javascript
<Grid size='xl' color='#fff' gridColor='#00000030'>
  <PageExample />
  <PageExample />
  <PageExample />
</Grid>
```

| Props     | Description                                                     | Type                |
| --------- | --------------------------------------------------------------- | ------------------- |
| size      | The size of the grid. Default is md.                            | sm, md, lg, xl, 2xl |
| color     | The color of the grid. Default is white.                        | Colors              |
| gridColor | The color of the grid lines. Default is semi-transparent black. | Colors              |

## Types

**CssColor:** Any value of vanilla css Color

**TailwindColor:** Values like "bg-white" or "text-sky-400"

**Colors:** Combination of CssColor and TailwindColor

## Authors

- [Bogar Alejandro Vazquez Mata](https://github.com/Bogaralex135)
