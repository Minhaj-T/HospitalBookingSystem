

function SpecialitesForm() {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon /> Add Doctor
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add doctor
        </BootstrapDialogTitle>
      <form onSubmit={onSubmit}>  
        <DialogContent dividers>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="name"
                  label="Name"
                  value={name}
                  onChange={onChange}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  value={email}
                  onChange={onChange}
                  label="email"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={onChange}
                  label="Phone"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  label="password"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <div style={{paddingTop: '25px',textAlign: 'center'}}>
          <Button variant="contained" size="medium"  type="submit">Save</Button>
          </div>
        </DialogContent>
      </form>  
      </BootstrapDialog>
    </div>
  )
}

export default SpecialitesForm