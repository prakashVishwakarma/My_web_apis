// class GradientPainter {
//     paint(ctx, size, properties) {
//       const { width, height } = size;
  
//       // Clear the canvas
//       ctx.clearRect(0, 0, width, height);
  
//       // Draw a gradient
//       const gradient = ctx.createLinearGradient(0, 0, width, height);
//       gradient.addColorStop(0, 'red');
//       gradient.addColorStop(1, 'blue');
  
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);
//     }
//   }
  
//   if ('paintWorklet' in CSS) {
//     CSS.paintWorklet.addModule('paint-worklet.js').catch(error => {
//       console.error('Failed to add paint worklet module:', error);
//     });
//   } else {
//     console.error('CSS.paintWorklet is not supported in this browser.');
//   }
  