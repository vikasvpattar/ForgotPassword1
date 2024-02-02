import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
export default function ForgotPassword() {
  return (
    <Box
      sx={{
        color: "rgb(36,35,43)",
        maxWidth: "1200px",
        backgroundColor: "rgb(255, 255, 255)",
        width: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        rowGap: "2rem",
        "@media(max-width:991px)": { padding: "0.8rem" },
        "@media(max-width:479px)": { rowGap: "1.8rem", padding: "0.8rem" },
      }}
    >
      <Stack sx={{ alignItems: "flex-start" }} gap="8px" direction="column">
        <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: "500" }}>
          Change password
        </Typography>
        <Typography
          sx={{
            opacity: "1",
            "@media(max-width:479px)": { fontSize: "13px" },
          }}
          variant="body1"
        >
          Choose a strong password and don't reuse it for other accounts.
          Changing your password will sign you out of all your devices,
          including your phone. You will need to enter your new password on all
          your devices
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "40%",
          alignItems: "flex-start",
          "@media(max-width:991px)": { Width: "450px" },
          "@media(max-width:479px)": { width: "100%", rowGap: "12px" },
        }}
        gap="2rem"
        direction="column"
      >
        <Stack
          sx={{ alignItems: "flex-start", width: "100%" }}
          gap="6px"
          direction="column"
        >
          <InputLabel
            sx={{
              color: "rgb(5, 5, 5)",
              fontWeight: "700",
              fontSize: "17px",
              width: "fit-content",
              lineHeight: "normal",
              "@media(max-width:479px)": { fontSize: "14.5px" },
            }}
            name="label"
            htmlFor="old-password"
          >
            Old password
          </InputLabel>
          <Input
            disableUnderline
            sx={{
              border: "1px solid rgb(214, 214, 214)",
              color: "rgb(36,35,43)",
              padding: "0.9rem 0.5rem",
              fontSize: "15px",
              width: "100%",
              borderRadius: "8px",
              "@media(max-width:479px)": { fontSize: "13px", padding: "10px" },
            }}
            placeholder="Old password"
            id="old-password"
            type="password"
            name="input"
          ></Input>
        </Stack>
        <Stack
          sx={{ alignItems: "flex-start", width: "100%" }}
          span="12.0"
          gap="6px"
          direction="column"
        >
          <InputLabel
            sx={{
              color: "rgb(5, 5, 5)",
              fontWeight: "700",
              fontSize: "17px",
              width: "fit-content",
              lineHeight: "normal",

              "@media(max-width:479px)": { fontSize: "14.5px" },
            }}
            name="label"
            htmlFor="new-password"
          >
            New password
          </InputLabel>
          <Input
            disableUnderline
            sx={{
              border: "1px solid rgb(214, 214, 214)",
              color: "rgb(36,35,43)",
              padding: "0.9rem 0.5rem",
              fontSize: "15px",
              borderRadius: "8px",
              width: "100%",
              "@media(max-width:479px)": { fontSize: "13px", padding: "10px" },
            }}
            placeholder="At least 8 characters"
            id="new-password"
            type="password"
            name="input"
          ></Input>
        </Stack>
        <Stack
          sx={{ alignItems: "flex-start", width: "100%" }}
          gap="6px"
          direction="column"
        >
          <InputLabel
            sx={{
              color: "rgb(5, 5, 5)",
              fontWeight: "700",
              fontSize: "17px",
              width: "fit-content",
              lineHeight: "normal",
              "@media(max-width:479px)": { fontSize: "14px" },
            }}
            name="label"
            htmlFor="confirm-new-password"
          >
            Confirm new password
          </InputLabel>
          <Input
            disableUnderline
            sx={{
              border: "1px solid rgb(214, 214, 214)",
              color: "rgb(36,35,43)",
              padding: "0.9rem 0.5rem",
              fontSize: "15px",
              width: "100%",
              borderRadius: "8px",
              "@media(max-width:479px)": { fontSize: "13px", padding: "10px" },
            }}
            placeholder="Confirm password"
            id="confirm-new-password"
            type="password"
            name="input"
          ></Input>
        </Stack>
        <Button
          sx={{
            background: "rgb(147, 149, 150)",
            fontWeight: "600",
            fontSize: "14px",
            whiteSpace: "nowrap",
            padding: "12px",
            backgroundColor: "#64cccc",
            width: "100%",
            justifyContent: "center",
            "@media(max-width:479px)": { width: "100%" },
            "&:hover": {
              backgroundColor: "#64cccc",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              "@media(max-width:479px)": { fontSize: "13.5px" },
            }}
            variant="subtitle"
          >
            Change password
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
