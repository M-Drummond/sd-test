# Audience Republic Test

A demo UI for Audience Republic.

## Features:

- Vu3 everywhere, all of it is in the Composition API.
- Tailwind + scoped CSS everywhere. There’s only a handful of CSS rules outside of utility classes.
- I wrote two custom width utilities, site-width and header-width, as they have subtly different widths at mobile size. This is how I’d get exact measurements for the layouts.
- The tailwind config has entirely custom breakpoints, based on the designs.
- Icons and buttons are in their own components, so they can be reused.
- The header element uses a prop, so it can be reused. It’s named SectionHeader, as it’s generic enough to be re-used or -shared in other places.
- The button takes a <slot> so that it can be extended in other places.
- There’s a globally registered <ResponsiveImage /> component that could be extended out to display retina or hi-rez images. I admit, I already had something very similar that I adapted for this.
- The space around the vertical dots on the Event Cards is slightly increased, and I’ve taken care to add padding to this,so it’s got a nice thumb-sized block around it - easier to press.
- Typescript interfaces used in a few spots to keep things neater.

#### NB: Designed font could not be extracted, so I've left the standard Inter font in place. It's similar enough to Graphik for our purposes here.
