export const isMobile = () => {

    return (
        Cypress.config("viewportHeight") < Cypress.env("mobileViewportWidthBreakPoint")
    );
}