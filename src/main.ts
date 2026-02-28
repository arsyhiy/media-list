import { Plugin } from "obsidian";
import { AddMediaModal } from "./modal/AddMediaModal";

export default class MediaPlugin extends Plugin {

    async onload() {
        this.addRibbonIcon("plus", "Add media", () => {
            new AddMediaModal(this.app).open();
        });
    }
}