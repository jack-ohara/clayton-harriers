export function addFormHandling(form: HTMLFormElement): void {
  if (process.env.GATSBY_WP_SITE_URL) {
    const messageHasJustBeenSent =
      new URLSearchParams(window.location.search).get("messageSent") === "true"

    if (messageHasJustBeenSent) {
      const confirmationMessageNode = document.createElement("p")
      confirmationMessageNode.classList.add(
        "contact-form-message-sent-confirmation"
      )
      confirmationMessageNode.innerText =
        "Thank you! Your message has been sent"

      form.append(confirmationMessageNode)
    }

    const actionLocation = form.action
      .replace(document.location.origin, process.env.GATSBY_WP_SITE_URL)
      .replace("graphql", "")

    form
      .querySelectorAll(".wpcf7-validates-as-required")
      .forEach(requiredField => requiredField.setAttribute("required", "true"))

    const submitButton = form.querySelector("[type='submit']")

    form.addEventListener("submit", async (event: SubmitEvent) => {
      event.preventDefault()

      const loadingSpinner = document.createElement("div")
      loadingSpinner.classList.add("loading-spinner")
      loadingSpinner.innerHTML =
        "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"

      submitButton?.setAttribute("hidden", "true")
      submitButton?.parentElement?.append(loadingSpinner)

      if (form.reportValidity()) {
        const data = new FormData(form)

        try {
          const result = await fetch(actionLocation, {
            method: form.method,
            body: data,
          })
        } catch (e) {}

        if (messageHasJustBeenSent) {
          window.location.reload()
        } else {
          window.location.href = `${window.location.pathname.replace(
            /\/$/,
            ""
          )}?messageSent=true`
        }
      } else {
        form
          .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
            ".wpcf7-form-control:invalid"
          )
          .forEach(invalidField => {
            invalidField.classList.add("is-invalid")
            invalidField.addEventListener(
              "change",
              () => {
                invalidField.classList.remove("is-invalid")
              },
              { once: true }
            )
          })

        submitButton?.removeAttribute("hidden")
        submitButton?.parentElement?.removeChild(loadingSpinner)
      }
    })
  }
}
