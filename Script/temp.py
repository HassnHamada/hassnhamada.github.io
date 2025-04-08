import svgwrite
import numpy as np


def create_metallic_polygon(filename, points: np.ndarray, size, step, space):
    # Create an SVG drawing
    dwg = svgwrite.Drawing(filename, profile='tiny', size=size)

    # Define a linear gradient for the metallic look
    gradient = dwg.linearGradient(start=(0, 0), end=(1, 1),
                                  id="metallicGradient")
    gradient.add_stop_color(0, 'red')
    gradient.add_stop_color(0.2, 'black')
    gradient.add_stop_color(0.4, 'gray')
    gradient.add_stop_color(0.7, 'silver')
    gradient.add_stop_color(1, 'white')
    dwg.defs.add(gradient)

    # Draw the first polygon with the metallic gradient
    dwg.add(dwg.polygon(points=points.tolist(), fill="url(#metallicGradient)"))

    # Shift the points for the second polygon
    points[:, 1] = points[:, 1].max() - points[:, 1]
    points[:, 0] = points[:, 0].max() - points[:, 0]
    points = points + [step + space, 0]

    # Draw the second polygon with the metallic gradient
    dwg.add(dwg.polygon(points=points.tolist(), fill="url(#metallicGradient)"))

    # Save the SVG file
    dwg.save()


# Parameters for the rectangle
filename = "metallic_rectangle.svg"
step = 100
space = 0.2 * step

points = [
    (0, 0),
    (step, 0),
    (step, step * 5 + space),
    (step * 6, step * 5 + space),
    (step * 6, step * 10 + space),
    (step * 5, step * 10 + space),
    (step * 5, step * 6 + space),
    (step, step * 6 + space),
    (step, step * 10 + space),
    (0, step * 10 + space),
]
points = np.array(points)

size = (points[:, 0].max() + step + space, points[:, 1].max())

# Create the metallic rectangle
create_metallic_polygon(filename, points, size, step, space)
