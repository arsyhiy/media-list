export async function appendMedia(vault: any, filePath: string, data: any) {

    let file = vault.getAbstractFileByPath(filePath);

    if (!file) {
        file = await vault.create(
            filePath,
            "# Media Database\n"
        );
    }

    const entry = `

---

## ${data.title}

![cover](${data.image})

**Genre:** ${data.genre}

${data.description}

`;

    const content = await vault.read(file);
    await vault.modify(file, content + entry);
}