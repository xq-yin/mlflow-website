import Link from "@docusaurus/Link";
import { Button } from "../Button/Button";
import { MLFLOW_DOCS_URL } from "@site/src/constants";

interface Props {
  variant?: "blue" | "primary" | "dark";
  width?: "default" | "full";
  size?: "small" | "medium" | "large";
  link?: string;
  body?: string;
}

export const GetStartedButton = ({
  link = MLFLOW_DOCS_URL,
  size = "medium",
  width = "default",
  variant = "primary",
  body = "Get started",
}: Props) => {
  return (
    <Link to={link}>
      <Button size={size} width={width} variant={variant}>
        {body}
      </Button>
    </Link>
  );
};
