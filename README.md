# Clientdetection

 Client detection Weight: 30/100
For this final project, you and a partner will explore the window object and utilize its properties
and events to extract information about the 'client' (in web development, the term 'client' usually
denotes the end-user's device or browser, which sends requests to and receives information from a
server).

Directions and requirements
• Develop a single-page application using the instructor’s example.
• Incorporate utility functions into your JavaScript file.
• Write a set of functions to retrieve and display the following:
§ Operating system name
§ System language
§ Browser name (Chrome, Firefox, Edge, etc.)
§ Window width in pixels
§ Window height in pixels
§ Window orientation (portrait or landscape)
§ Battery level in percentage
§ Battery status (idle or charging)
§ Network status (whether the page is online or not)
• Implement event handling to set and modify the information displayed to the user.
• Ensure that the content within the 'window' section adjusts automatically in response to
changes in the browser window's dimensions.
• Note that certain browsers, such as Firefox, may lack support for battery status. Therefore, it
is crucial to verify (validate) the presence of this information within the 'navigator' object in
your application. If the information is unavailable, consider displaying 'not available,' as
demonstrated in the example below.
• Utilize window events to verify the page’s online status and dynamically modify the colour and
text of the 'network status' section (refer to the live demo shown in class).
• Host your project on GitHub Pages and provide the link to the repository. The link to the live
page should be available within the repository.
