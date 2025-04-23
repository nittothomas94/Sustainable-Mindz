import { Box, Grid, TextField, Typography, Button, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = ({ contactImage }) => {
  return (
    <div className="flex flex-col px-[10px] gap-10 md:items-start md:px-33 md:py-2 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
      <div className="flex flex-col gap-4 py-5 md:w-full lg:w-124">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <h1>Get In Touch With Us Now</h1>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} display="flex" alignItems="center" gap={1}>
            <PhoneIcon color="secondary" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Phone
              </Typography>
              <Typography variant="body2">+971 4529 9051</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center" gap={1}>
            <EmailIcon color="secondary" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Phone
              </Typography>
              <Typography variant="body2">info@sustainablemindz.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Name</label>
              <input
                type="text"
                className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl"
              />
            </div>
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Phone</label>
              <input
                type="text"
                className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Email</label>
              <input
                type="email"
                className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl"
              />
            </div>
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Subject</label>
              <input
                type="text"
                className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>Message</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-sm bg-white text-purple-600 rounded-3xl border border-purple-100 shadow-md shadow-purple-200 cursor-pointer"
          >
            SEND MESSAGE NOW
          </button>
        </form>
      </div>

      <div className="md:w-[88%] md:h-[411px] object-contain lg:w-100 lg:h-100 lg:ml-7 lg:mb-7">
        <img
          src={contactImage}
          alt="girld speek Home"
          className="w-full h-90 md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default ContactUs;
