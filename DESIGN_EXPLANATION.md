# Design Decisions and Thoughts
# Technology Stack
For the backend development, Node.js and Express were selected. These technologies were chosen due to their lightweight and efficient nature, making them ideal for building RESTful APIs. Additionally, TypeScript was utilized to enhance the development process by adding static typing and improved tooling, resulting in more robust and maintainable code.

On the frontend, React with TypeScript was chosen as the JavaScript library for building user interfaces. TypeScript brings static typing to the development of React applications, providing enhanced code quality, improved IDE support, and better collaboration within teams. The create-react-app skeleton was used as a starting point, configured to support TypeScript for a type-safe development experience.

# REST Endpoint
To retrieve Magic card data from the Scryfall API, a single REST endpoint was created using Express and TypeScript. This decision was driven by the simplicity and maintainability it offers. Consolidating the API calls into a single endpoint reduces code duplication and makes it easier to handle potential changes in the Scryfall API. The use of TypeScript ensures type safety and allows for better error handling and documentation through type annotations.

# Environment Variables
To store sensitive information, such as the Scryfall API URL, an environment variable approach was adopted. This decision enhances security by separating configuration details from the source code. By using a .env file, the API URL can be easily modified without requiring code changes, making the application more flexible and facilitating deployment across different environments. TypeScript types were used to provide compile-time checking and autocompletion for environment variables.

# Real-time Search
The decision to implement real-time search functionality was motivated by the desire to provide an intuitive and responsive user experience. Users can input a card name in the search bar, and the application automatically sends requests to the backend without the need for manual submission. This immediate feedback reduces user friction and enhances usability. TypeScript is leveraged to define the data models and ensure proper data handling throughout the search process.

# Rate Limiting
To prevent abuse and ensure the stability of the application and the Scryfall API, rate limiting was implemented on the frontend. Users are restricted from making more than one API request per second through the search bar. This approach helps maintain a reasonable usage pattern and prevents excessive requests that could overload the API server. TypeScript is used to enforce the rate limiting logic and provide a clear and maintainable implementation.

# User-Friendly Display
The user interface was designed to present card results in a clear and user-friendly manner. Each card displays the relevant information, including the card image, name, set name, number, and rarity. This selection of attributes aims to provide users with the necessary details while keeping the display concise and visually appealing. TypeScript interfaces and types are utilized to define the structure of the card data and ensure proper rendering and handling throughout the UI components.

# Bonus Features
As part of the project, several bonus features were implemented. Firstly, the Node endpoint was thoroughly tested using the Jest testing framework with TypeScript support. This approach ensures the reliability and correctness of the API endpoint, reducing the chances of regressions and providing type-safe testing.

Secondly, frontend pagination and sorting were included to enhance the browsing experience. Users can navigate through multiple pages of search results and sort them based on different criteria, such as card name or rarity. TypeScript is utilized to define the sorting logic and ensure consistent and type-safe data manipulation.

Lastly, the entire user interface was styled using Tailwindcss exclusively. TypeScript's support for static typing and IDE integration further enhances the development experience, enabling autocompletion and compile-time checks for Tailwindcss classes, resulting in a cohesive and visually appealing design.

# Conclusion
The design decisions made during the development of the Magic Card Search application were driven by considerations of simplicity, efficiency, user experience, and maintainability. The selected technology stack, REST endpoint design, environment variables usage, real-time search, rate limiting, user-friendly display, and bonus features all leverage the power of TypeScript to enhance the development process, provide static typing, and ensure code correctness. These choices aim to provide an efficient search experience for Magic card enthusiasts while adhering to best practices and industry standards in TypeScript development.