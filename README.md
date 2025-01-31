# TypeScript Type Coercion Bug

This repository demonstrates a common TypeScript bug where type coercion from JavaScript can lead to runtime errors despite seemingly correct TypeScript types.  The example showcases a function expecting two numbers but accepting a string due to type coercion.  The solution involves stricter type checking to prevent this.