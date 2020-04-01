import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { count } from "../utils/console";

const year = new Date().getFullYear();

const Copyright: React.FC = (): JSX.Element => {
  count(`Copyright: render`);

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.ui.com/">
        Ubiqwiti
      </Link>
      {` ${year}.`}
    </Typography>
  );
};

export { Copyright };
