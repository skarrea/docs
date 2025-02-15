import Vuetify from "vuetify/lib";
import "./sass/index.scss";


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Vuetify);

  // Material icons: https://fonts.google.com/icons
  const opts = {
    theme: { dark: false },
    // theme: { disable: true, dark: false },
    icons: {
      iconfont: "md",
    },
  };
  options.vuetify = new Vuetify(opts);

  router.beforeEach(async (to, from, next) => {
    // `to` and `from` are both route objects
    // this.name = to.params.name
    const to_path = to.fullPath;
    try {
      if (to.path.startsWith("/assets/") && to.path.endsWith(".pdf")) {
        // NOTE Redirect PDF assets if not found - fails to redirect existing
        window.location.href = "https://assets.hdc.ntnu.no" + to.path;
        next();
      } else if (
        to_path.startsWith("/tingweek/") || to_path === "/tingweek"
      ) {
        // NOTE Correct wrong link
        window.location.href = to_path.replace("/tingweek", "/govern-science/tingweek");
        next();
      } else if (
        to_path.startsWith("/tingweeks/") || to_path === "/tingweeks"
      ) {
        // NOTE Correct wrong link
        window.location.href = to_path.replace("/tingweeks", "/govern-science/tingweek");
        next();
      } else if (
        to_path.startsWith("/do-science/getting-started/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/do-science/getting-started/", "/do-science/lab-access/");
        next();
      } else if (
        to_path.startsWith("/getting-started/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/getting-started/", "/do-science/lab-access/");
        next();
      } else if (
        to_path.startsWith("/lab-access/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/lab-access/", "/do-science/lab-access/");
        next();
      } else if (
        to_path.startsWith("/service-desk/user-orders/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/user-orders/", "/do-science/service-desk/");
        next();
      } else if (
        to_path.startsWith("/service-desk/lab-orders/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/lab-orders/", "/administer-science/service-desk/lab-orders/");
        next();
      } else if (
        to_path.startsWith("/service-desk/data-space-orders/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/data-space-orders/", "/administer-science/service-desk/data-space-orders/");
        next();
      } else if (
        to_path.startsWith("/service-desk/service-center-orders/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/service-center-orders/", "/govern-science/service-desk/service-center-orders/");
        next();
      } else if (
        to_path.startsWith("/service-desk/data-controller-orders/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/data-controller-orders/", "/govern-science/service-desk/data-controller-orders/");
        next();
      } else if (
        to_path.startsWith("/working-in-your-lab/technical-tools/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/working-in-your-lab/technical-tools/", "/do-science/tools/technical/");
        next();
      } else if (
        to_path.startsWith("/working-in-your-lab/analytical-tools/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/working-in-your-lab/analytical-tools/", "/do-science/tools/analytical/");
        next();
      } else if (
        to_path.startsWith("/working-in-your-lab/transfer-tools/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/working-in-your-lab/transfer-tools/", "/do-science/tools/transfer/");
        next();
      } else if (
        to_path.startsWith("/working-in-your-lab/workbench/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/working-in-your-lab/workbench/", "/do-science/hunt-workbench/");
        next();
      } else if (
        to_path.startsWith("/community/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/community/", "/do-science/community/");
        next();
      } else if (
        to_path.startsWith("/troubleshooting/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/troubleshooting/", "/do-science/troubleshooting/");
        next();
      } else if (
        to_path.startsWith("/faq/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/faq/", "/do-science/faq/");
        next();
      } else if (
        to_path.startsWith("/certificates/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/certificates/", "/govern-science/compliance/certificates/");
        next();
      } else if (
        to_path.startsWith("/policies/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/policies/", "/govern-science/policies/");
        next();
      } else if (
        to_path.startsWith("/subcontractors/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/subcontractors/", "/govern-science/compliance/subcontractors/");
        next();
      } else if (
        to_path.startsWith("/responsibilities/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/responsibilities/", "/govern-science/risk-management/#clarification-of-responsibilities");
        next();
      } else if (
        to_path.startsWith("/service-desk/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/service-desk/", "/administer-science/service-desk/");
        next();
      } else if (
        to_path.startsWith("/data-transfers/internal-kista/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/data-transfers/internal-kista/", "/do-science/data-transfers/internal-kista/");
        next();
      } else if (
        to_path.startsWith("/data-transfers/external-kista/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/data-transfers/external-kista/", "/do-science/data-transfers/external-kista/");
        next();
      } else if (
        to_path.startsWith("/agreements/")
      ) {
        // Rewrite the link to correct path
        window.location.href = to_path.replace("/agreements/", "/administer-science/agreements/");
        next();
      } else {
        next();
      }
    } catch (err) {
      next();
    }
  });

  // Expander Container - scroll to selected item when URL with ID is opened
  if (typeof document !== 'undefined') {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        const { hash } = location
        const decoded = decodeURIComponent(hash)
        // console.log(decoded)
        if (decoded && decoded.startsWith('#detail-') ) {
          let el = document.querySelector(decoded)

          if (el) {
            try {
              var headerOffset = 64
              var elementPosition = el.getBoundingClientRect().top
              var offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({top: offsetPosition, behavior: "smooth"})
            } catch (err) {
              el.scrollIntoView()
            } finally {
              el.setAttribute("open", "")
              // Highlight the newly opened block for a few seconds
              if (!el.classList.contains('glow')) {
                el.classList.add('glow')
              }
            }
          }
        }
      }
    }
  }
};
