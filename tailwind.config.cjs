/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ubuntu-bg': "#002B36",
        'ubuntu-text': '#839496',
        'ubuntu-red': '#EF2929',
        'ubuntu-darkred': "#CC0000",
        'ubuntu-black': "#2E3436",
        "ubuntu-gray": "#555753",
        "ubuntu-green": "#8AE234",
        "ubuntu-darkgreen": "#4E9A06",
        "ubuntu-yellow": "#FCE94F",
        "ubuntu-gold": "#C4A000",
        "ubuntu-lightblue": "#729FCF",
        "ubuntu-blue": "#3465A4",
        "ubuntu-pink": "#AD7FA8",
        "ubuntu-violet": "#75507B",
        "ubuntu-aqua": "#06989A",
        "ubuntu-cyan": "#34E2E2",
        "ubuntu-white": "#EEEEEC",
        "ubuntu-dirtywhite": "#D3D7CF"
      }
    },
  },
  plugins: [],
}
