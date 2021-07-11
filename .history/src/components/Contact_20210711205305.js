import React from "react";
import emailjs from "emailjs-com";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  
  handleSubmit = (e) => {
    console.log("here we go we have submited borrow");
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs
      .send(
        `service_msfjnfj`,
        `template_wx1nmko`,
        {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
          reply_to: this.state.email,
        },
        "user_KwzIcpHEADqqGdUaNzQGE"
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly ");
        },
        (error) => {
          alert("An error occurred, Please try again" + error.text);
          console.log(error);
        }
      );
  };

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    const [disable, setDisable] = React.useState(false);
    
    return (
      <div className="contact" id="contact">
        <h1>Contact me</h1>

        <h2 className="text-center w-responsive mx-auto pb-5">
          {" "}
          Let us know how can we help{" "}
        </h2>
        <div className="all">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                type="text"
                id="name"
                className="form-control"
                required
                defaultValue={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                placeholder="Subject"
                type="text"
                id="subject"
                className="form-control"
                required
                defaultValue={this.state.subject}
                onChange={this.onSubjectChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                required
                defaultValue={this.state.email}
                onChange={this.onEmailChange.bind(this)}
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                type="text"
                id="message"
                required
                defaultValue={this.state.message}
                onChange={this.onMsgChange.bind(this)}
              ></textarea>
            </div>
            <button disabled={disable} onClick={() => setDisable(true)} type="submit" className="btn btn-primary" >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactPage;
