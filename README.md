# Local Server Setup Guide using Live Server

This guide provides instructions for setting up a local server to run a web application using Live Server, a lightweight extension available for various code editors.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Visual Studio Code (or any other code editor of your choice)
- Live Server extension installed in Visual Studio Code

## Getting Started

1. **Install Live Server Extension**: Open Visual Studio Code, navigate to the Extensions view (Ctrl+Shift+X), and search for "Live Server". Install the extension provided by Ritwick Dey.

2. **Open Your Project**: Open your HTML, CSS, and JavaScript files in Visual Studio Code.

3. **Start Live Server**: Right-click on your HTML file in the editor and select "Open with Live Server" from the context menu. Alternatively, you can use the shortcut `Alt+L`, `Alt+O`.

4. **Access Your Web Application**: Live Server will automatically open your default web browser and navigate to your web application, running on a local server.

## Additional Notes

- Live Server automatically refreshes your browser when you make changes to your HTML, CSS, or JavaScript files, providing a seamless development experience.

- You can customize Live Server settings by clicking on the "Go Live" button at the bottom right corner of the Visual Studio Code window and selecting "Settings".

- This setup is suitable for development purposes. For production deployment, consider deploying your application to a web server.

## Performance Comparison

- The use of worker threads can significantly improve performance, potentially by 10-12 times, as demonstrated in this video. However, this improvement depends on your hardware and the efficiency of your code.

- Be aware that worker threads have overhead, and performance can vary based on the input parameters and the volume of messages exchanged between the worker thread and the main thread.
  
https://github.com/chikkibum/Worker-Mandlebrot/assets/71315985/27629b63-16e8-4acc-8c2e-879fdc33b515

## Support

If you encounter any issues or have questions about setting up Live Server, refer to the [Live Server documentation](https://github.com/ritwickdey/vscode-live-server) or reach out to [your contact information or support channel].


