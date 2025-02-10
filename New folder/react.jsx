**React Basics Notes**

**What is React?**
React is a JavaScript library for building user interfaces. It helps developers create dynamic web applications where the UI updates without reloading the entire page.

**Why Use React?**
React makes web applications faster and more interactive by updating only the necessary parts of the UI instead of reloading the whole page. This improves performance and user experience.

**React DOM vs Virtual DOM vs Real DOM**
- **Real DOM**: Updates the entire UI when a change occurs, making it slow.
- **Virtual DOM**: A lightweight copy of the Real DOM, which updates only the changed elements, making React faster.
- **React DOM**: Bridges the gap between the Virtual DOM and Real DOM by efficiently updating the web page.

**React DOM vs React Native**
- **React DOM**: Used to build web applications.
- **React Native**: Used to build mobile applications for iOS and Android using React.

**Import and Export in React**
React allows code reusability using imports and exports.
- **Named Export:** Used when multiple exports exist in a file.
  ```jsx
  export const func = () => {};
  import { func } from './file';
  ```
- **Default Export:** Used when only one export exists in a file.
  ```jsx
  export default Component;
  import Component from './file';
  ```

**Library vs Framework**
- **Library**: Provides specific features but gives developers more control (e.g., React).
- **Framework**: Provides a complete structure and controls how the application is built (e.g., Angular, Vue).

**npm vs npx**
- **npm**: Installs packages and dependencies globally or locally.
- **npx**: Runs a package without installing it permanently.

**React CRA vs Vite**
- **Create React App (CRA)**: Official React setup but slower.
- **Vite**: Modern, faster alternative for setting up React projects.

**JSX and Its Rules**
JSX (JavaScript XML) allows writing HTML inside JavaScript.
Rules:
- Must return a single parent element.
- Use `className` instead of `class`.
- Wrap multi-line JSX inside parentheses `()`.
  ```jsx
  const App = () => (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
  ```

**Key Folders and Files in a React Project**
- `src/` → Contains main application code.
- `public/` → Holds static assets like images.
- `index.html` → Main HTML file.
- `index.js / main.jsx` → Application entry point.
- `App.jsx` → Main component containing UI elements.

**Babel and Webpack**
- **Babel**: Converts modern JavaScript into older JavaScript for browser compatibility.
- **Webpack**: Bundles all files into optimized output for faster performance.

**Main Files in a Vite Project**
Vite-based React projects have three main files:
- `index.html` → Basic structure of the web page.
- `main.jsx` → Renders the React application.
- `App.jsx` → Main component holding UI elements.

**How to Install React**
- **Using CRA:**
  ```sh
  npx create-react-app my-app
  cd my-app
  npm install
  npm start
  ```
- **Using Vite:**
  ```sh
  npm create vite@latest my-app --template react
  cd my-app
  npm install
  npm run dev
  ```

**How to Install Icons in React**
Using react-icons Library	
steps:
1. Install npm install react-icons
2. Import the icon in component
3. Use it in JSX	
Eg., jsx import { FaCar } from 'react-icons/fa'; <FaCar size={40} color="red" />

**How to Insert Images, Icons, and CSS in React**
- **Image:** Importing an image from the local project folder.
  ```jsx
  import MyImage from './image.png';
  <img src={MyImage} alt='My Image' />
  ```
- **Icon:** Using an icon library like FontAwesome.
- **CSS:**
  ```jsx
  import './style.css';
  ```
  or inline styles.

**What are Components in React?**
Components are reusable building blocks of UI in React applications.

**Functional vs Class Components**
- **Functional Component:**
  ```jsx
  const MyComponent = () => <h1>Hello</h1>;
  ```
- **Class Component:**
  ```jsx
  class MyComponent extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
  }
  ```

**How to Merge Two Styles (Inline & Object)**
Combining inline styles with an object.
```jsx
const styles = { color: 'blue', fontSize: '20px' };
const App = () => (
  <h1 style={{ ...styles, backgroundColor: 'yellow' }}>Styled Text</h1>
);
```

