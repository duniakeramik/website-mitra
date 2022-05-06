import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function Copyright(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "95%",
        color: "#fff",
        p: { xs: 2, md: 4 },
        mt: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <IconButton
            onClick={() => {
              window.open(
                process.env.REACT_APP_INSTAGRAM_URL ||
                  "https://www.instagram.com/tokoduniakeramik"
              );
            }}
            sx={{ color: "primary.main" }}
          >
            <InstagramIcon
              sx={{
                color: "secondary.main",
                mr: 1,
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                process.env.REACT_APP_FACEBOOK_URL ||
                  "https://www.facebook.com/tokoduniakeramik"
              );
            }}
            sx={{ color: "primary.main" }}
          >
            <FacebookIcon
              sx={{
                color: "secondary.main",
                mr: 1,
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                "https://www.google.com/search?q=dunia+keramik&sxsrf=APq-WBskbN16UWDdEJSb5z976-6IVCFa2g%3A1650722677151&ei=dQdkYvzzCJyH4-EP_qqlsAI&oq=dunia+&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzILCAAQgAQQsQMQgwEyDAgAELEDEIMBEAoQQzILCAAQgAQQsQMQgwEyBwgAELEDEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOggIABCSAxCwAzoKCC4QxwEQrwEQJzoKCAAQsQMQgwEQQzoECC4QQzoLCC4QgAQQxwEQrwE6BwguENQCEEM6CgguELEDENQCEEM6CgguEMcBENEDEEM6CgguEMcBEKMCEENKBAhBGABKBAhGGABQoAxYnxNgkh9oAXABeACAAVyIAY8EkgEBNpgBAKABAcgBCcABAQ&sclient=gws-wiz"
              );
            }}
            sx={{ color: "primary.main" }}
          >
            <GoogleIcon
              sx={{
                color: "secondary.main",
                mr: 1,
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
           {process.env.REACT_APP_WEBSITE_NAME} © Copyright {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Copyright;
