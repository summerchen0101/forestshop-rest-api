import ProductController from '@ctrl/ProductController';

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  const x = 1;
  const y = 2;
  const expected = 3;

  // Act
  const actual: number = ProductController.sum(x, y);

  // Assert
  expect(actual).toBe(expected);
});
