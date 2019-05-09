function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('barn');
    link.textContent = quest.title;

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    return link;
}

export default createQuestLink;