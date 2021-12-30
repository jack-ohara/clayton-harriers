export function addFormHandling(form: HTMLFormElement): void {
  if (process.env.GATSBY_WP_SITE_URL) {
    const actionLocation = form.action
      .replace(document.location.origin, process.env.GATSBY_WP_SITE_URL)
      .replace("graphql", "")

    console.log(actionLocation)

    form
      .querySelectorAll(".wpcf7-validates-as-required")
      .forEach(requiredField => requiredField.setAttribute("required", "true"))

    form.addEventListener("submit", async (event: SubmitEvent) => {
      event.preventDefault()

      console.log("Now doing the form processing...")

      if (form.reportValidity()) {
        const data = new FormData(form)

        const result = await fetch(actionLocation, {
          method: form.method,
          body: data,
        })

        console.log(result)
      } else {
        form
          .querySelectorAll(".wpcf7-form-control:invalid")
          .forEach((invalidField: Element) => {
            const formElement = invalidField as
              | HTMLInputElement
              | HTMLTextAreaElement

            formElement.classList.add("is-invalid")
            formElement.addEventListener(
              "change",
              () => {
                formElement.classList.remove("is-invalid")
              },
              { once: true }
            )
          })
      }
    })
  }
}
