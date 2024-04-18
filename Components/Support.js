import React from 'react';

const Support = () => {
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted!');
  };

  return (
    <div>
      <h1>Support</h1>
      <div>
        <h2>FAQ</h2>
        <p>Here are some frequently asked questions:</p>
        <ul>
          <li>Question 1: How do I track my mood in the app?</li>
          <li>Question 2: Can I track multiple moods in a single day?</li>
          <li>Question 3: Is my mood data private and secure?</li>
          <li>Question 4: Can I view my mood history over time?</li>
          <li>Question 5: How can I set and track daily goals?</li>
          <li>Question 6: What if I forget to track my mood for a day?</li>
          <li>Question 7: Can I export my mood data?</li>
          <li>Question 8: How can I provide feedback or report issues?</li>
          {}
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleContactFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Support;