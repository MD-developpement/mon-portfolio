'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0e3241e5-24da-4934-8505-01ddb73fc26d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });


     setTimeout(() => {
           
            // Réinitialiser le formulaire
            setFormData({ name: '', email: '', message: '' })

            // Masquer le message après 5 secondes
            setTimeout(() => setResult(''), 3000)
        }, 1500)

    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', message: '' })

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {result === "Success!" && (
                <div className={styles.successMessage}>
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            )}

            <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className={styles.submitBtn}
            > Envoyer le message
            </button>
        </form>
    )
}