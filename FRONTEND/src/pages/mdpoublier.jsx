import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function MotDePasseOublie() {
    const [email, setEmail] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici tu peux ajouter la logique pour envoyer l'email à ton backend
        setConfirmation(`Un lien de réinitialisation a été envoyé à ${email}`);
    };

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Mot de passe oublié
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    Entrez votre adresse email pour recevoir un lien de réinitialisation.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Adresse email"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" fullWidth>
                        Envoyer
                    </Button>
                </form>
                {confirmation && (
                    <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
                        {confirmation}
                    </Typography>
                )}
            </Paper>
        </Box>
    );
}

export default MotDePasseOublie;
