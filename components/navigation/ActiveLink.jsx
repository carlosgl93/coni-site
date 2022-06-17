import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

// active style
const activeStyle = {
  borderWidth: "1px",
  borderColor: "#FFCE00",
  color: "#ffffff",
  margin: "0vh 1vw",
  padding: "0.5vw 2vw",
};
// not active style
const defaultStyle = {
  borderWidth: "1px",
  borderColor: "#ffffff",
  color: "#ffffff",
  margin: "0vh 1vw",
  padding: "0.5vw 2vw",
};
const ActiveLink = ({ link, title }) => {
  const { asPath } = useRouter();

  return (
    <Link href={link}>
      <Button
        variant='outlined'
        style={asPath === link ? activeStyle : defaultStyle}
      >
        {title}
      </Button>
    </Link>
  );
};

export default ActiveLink;
