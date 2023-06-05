### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
This is a way to create client side routing, we use this so we can create navigational links that lead to other components. React Router make it easier to setup these routes.

- What is a single page application?
An application that does not change pages, instead it renders new information on the same page without having to reload or navigate to a new page.

- What are some differences between client side and server side routing?
Client side routing is done on the browser side, and does not require another request from the server to download or retrieve the webpage information. Server side routing is when a request is made on the actual server and sent down to the client.

- What are two ways of handling redirects with React Router? When would you use each?
Redirects can be declared as a compoment in a list of avaiable routes, this is great when you have multiple pages and maybe want a static home page. Another way is to put in a manualy redirect when there is an issue navigating to the page with logic.

- What are two different ways to handle page-not-found user experiences using React Router? 
One way is to add a page 404 component to the router list for any route that may not be specified. The other is to add it in manually with using logic inside a route.

- How do you grab URL parameters from within a component using React Router?
with the ussParams hook we can pass url parameters in a component.

- What is context in React? When would you use it?
Context is a way of handling props. We use it if for example a prop we want may be at the highest level parent and we want maybe a grand child to have that prop. We can simply create a context to reference that prop later.

- Describe some differences between class-based components and function
  components in React.
  Class based components require us to use this to refer to the class when making functions, they also take much more lines of code to write then a functional component.

- What are some of the problems that hooks were designed to solve?
