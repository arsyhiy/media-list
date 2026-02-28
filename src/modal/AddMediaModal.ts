import { Modal, App } from "obsidian";
import { appendMedia } from "../storage/mediaWriter";

export class AddMediaModal extends Modal {

    constructor(app: App) {
        super(app);
    }

    onOpen() {

        const { contentEl } = this;

        contentEl.createEl("h2", { text: "Add Media" });

        const titleInput = contentEl.createEl("input");
        titleInput.placeholder = "Title";

        const genreInput = contentEl.createEl("input");
        genreInput.placeholder = "Genre";

        const descInput = contentEl.createEl("textarea");
        descInput.placeholder = "Description";

        const imageInput = contentEl.createEl("input");
        imageInput.placeholder = "Image URL";

        const btn = contentEl.createEl("button", { text: "Save Media" });

        btn.onclick = async () => {

            const data = {
                title: titleInput.value,
                genre: genreInput.value,
                description: descInput.value,
                image: imageInput.value
            };

            await appendMedia(
                this.app.vault,
                "media_database.md",
                data
            );

            this.close();
        };
    }
}
