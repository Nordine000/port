import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const criteria = ["Vitesse", "Technique", "Mental", "Leadership", "Endurance"];

function EvaluationForm({ onSubmit }) {
    const [selectedCriterion, setSelectedCriterion] = useState("");
    const [score, setScore] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCriterion || !score) return;

        onSubmit({
            label: selectedCriterion,
            score: parseInt(score),
            comment,
        });

        setSelectedCriterion("");
        setScore("");
        setComment("");
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Ajouter une évaluation</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="Critère"
                    value={selectedCriterion}
                    onChange={(e) => setSelectedCriterion(e.target.value)}
                    fullWidth
                    margin="normal"
                >
                    {criteria.map((crit) => (
                        <MenuItem key={crit} value={crit}>
                            {crit}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Note sur 10"
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    fullWidth
                    margin="normal"
                    inputProps={{ min: 1, max: 10 }}
                />
                <TextField
                    label="Commentaire (optionnel)"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Envoyer
                </Button>
            </form>
        </Box>
    );
}

export default EvaluationForm;
