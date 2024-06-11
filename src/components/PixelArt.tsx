import { Table } from "@mantine/core";

export const PixelArt = () => {
  let coordinatesX: number[] = [];
  let coordinatesY: number[] = [];

  for (let x = 0; x < 30; x++) {
    coordinatesX.push(x);
  }

  for (let y = 0; y < 40; y++) {
    coordinatesY.push(y);
  }

  const rows = coordinatesY.map((y) => (
    <Table.Tr key={y}>
      <Table.Td>{y}</Table.Td>
    </Table.Tr>
  ));

  const columns = coordinatesX.map((x) => <Table.Th key={x}>{x}</Table.Th>);

  return (
    <Table>
      <Table.Thead>
        <Table.Tr style={{ border: "black solid 1px" }}>{columns}</Table.Tr>
      </Table.Thead>
      <Table.Tbody style={{ border: "black solid 1px" }}>{rows}</Table.Tbody>
    </Table>
  );
};
