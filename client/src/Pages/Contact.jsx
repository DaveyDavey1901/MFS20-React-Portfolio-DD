export function Contact() {
  return (
    <div className="content">
      <h1>Contact me</h1>
      <form action="https://submit-form.com/VYOGDzCJ">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required=""
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required=""
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
