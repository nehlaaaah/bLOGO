/* Next.css */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.next-background {
  background-image: url('https://cdn.pixabay.com/photo/2018/06/17/17/48/pen-3481061_1280.jpg');
  background-size: cover; /* Ensure the background image covers the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.card {
  animation: fadeIn 1s ease-in-out;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
