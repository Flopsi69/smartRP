"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");
("use strict");

gulp.task("smart-grid", (cb) => {
  smartgrid("./src/styles/vendor/import/", {
    outputStyle: "scss",
    filename: "_smart-grid",
    columns: 12, // number of grid columns
    offset: "1.875rem", // gutter width - 30px
    mobileFirst: false,
    mixinNames: {
      container: "container",
    },
    container: {
      maxWidth: "75rem", // 1540px
      fields: "0.9375rem", // side fields - 15px
    },
    breakPoints: {
      xs: {
        width: "36rem", // 576px
      },
      sm: {
        width: "48rem", // 768px
      },
      md: {
        width: "62rem", //  992px
      },
      lg: {
        width: "75rem", // 1200px
      },
    },
  });
  cb();
});
