export default function getAttack(obj) {
  const special = [];
  for (const item of obj.special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    special.push({
      id, name, description, icon,
    });
  }
  return special;
}
