self.onmessage = function(event) {
    const { width, height, maxIterations, zoom, offsetX, offsetY } = event.data;

    function mandelbrot(c_real, c_imaginary) {
        let z_real = 0;
        let z_imaginary = 0;
        for (let i = 0; i < maxIterations; i++) {
            const z_real_temp = z_real * z_real - z_imaginary * z_imaginary + c_real;
            const z_imaginary_temp = 2 * z_real * z_imaginary + c_imaginary;
            z_real = z_real_temp;
            z_imaginary = z_imaginary_temp;
            if (z_real * z_real + z_imaginary * z_imaginary > 4) {
                return i;
            }
        }
        return maxIterations;
    }

    const imageData = new Uint8ClampedArray(width * height * 4);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const c_real = (x + offsetX) / zoom;
            const c_imaginary = (y + offsetY) / zoom;
            const iterations = mandelbrot(c_real, c_imaginary);
            const brightness = iterations / maxIterations * 255;
            const index = (y * width + x) * 4;
            imageData[index] = brightness;
            imageData[index + 1] = brightness;
            imageData[index + 2] = brightness;
            imageData[index + 3] = 255;
        }
    }

    self.postMessage({ imageData, width, height });
};
