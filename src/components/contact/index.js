import React from "react"

import styles from "./style.module.scss"

import Icon from "../../hooks/use-icons"
import useForm from "../../hooks/use-form"

const Contact = () => {
  const [formData, handleInput] = useForm()

  return (
    <>
      <section className={styles.contact}>
        <h1>Drop Hello.</h1>

        <form autoComplete="off">
          <div className={styles.row}>
            <div className={styles.name}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={styles.formControl}
                name="name"
                id="name"
                placeholder="Adarsha Acharya"
                value={formData.name}
                onChange={handleInput}
                required
              />
            </div>

            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={styles.formControl}
                name="email"
                id="email"
                placeholder="adarsha@example.com"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className={styles.message}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className={styles.formControl}
              id="message"
              cols="30"
              rows="10"
              placeholder="Hello Aadarsha!"
              value={formData.message}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <input type="submit" value="Send" className={styles.btn} />
          </div>
        </form>
      </section>

      <hr />

      <section className={styles.social}>
        <Icon stack="GitHub" key="github" />
        <Icon stack="Twitter" key="Twitter" />
        <Icon stack="Instagram" key="instagram" />
        <Icon stack="Linkedin" key="linkedin" />
      </section>
    </>
  )
}

export default Contact
